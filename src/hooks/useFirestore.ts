import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

type Image = {
    createdAt: Date,
    userEmail: string,
    imageUrl: string
};

const useFirestore = (collectionName: string) => {
    const [docs, setDocs] = useState<Image[]>([]); // Changed useState type to Image[]
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        let unsubscribe: (() => void) | undefined; // Define unsubscribe variable

        const getData = async () => {
            try {
                const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));
                unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const images: Image[] = [];
                    querySnapshot.forEach((doc) => {
                        const data = doc.data();
                        const imageUrl = data.imageUrl;
                        const createdAt = data.createdAt.toDate();
                        const userEmail = data.userEmail;
                        images.push({ imageUrl, createdAt, userEmail });
                    });
                    setDocs(images);
                    setIsLoading(false); // Set isLoading to false after data is fetched
                });
            } catch (error) {
                console.error(error);
                setIsLoading(false); // Set isLoading to false in case of error
            }
        };

        getData();

        // Return cleanup function to unsubscribe from snapshot listener
        return () => unsubscribe && unsubscribe();
    }, [collectionName]);

    return {
        docs,
        isLoading
    };
};

export default useFirestore;