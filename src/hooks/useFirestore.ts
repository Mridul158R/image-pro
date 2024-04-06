import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';

type Image = {
    createdAt: Date,
    userEmail: String,
    imageUrl: string
}

const useFirestore = (collectionName: string) => {
    let unsubscribe: ()=>void
    const [docs, setDocs] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(()=>{
        const getData = async()=>{
            try{
                    const q = query(collection(db,collectionName),orderBy("createdAt", "desc"));
                     unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const images: Image[] = [];
                    querySnapshot.forEach((doc) => {
                        const imageUrl = doc.data().imageUrl;
                        const createdAt = doc.data().createdAt.toDate();
                        const userEmail = doc.data().userEmail;
                        images.push({ imageUrl, createdAt,userEmail})
                    });
                    setDocs(images);
                    setIsLoading(false)
                });

            }
            catch(error){
                console.log(error);
                setIsLoading(false)
            }
        }

        getData()

        return ()=> unsubscribe && unsubscribe();
    },[collectionName])

    return {
        docs, isLoading
    }
}

export default useFirestore
