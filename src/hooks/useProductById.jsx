import React from "react";

import { getFirestore, doc, getDoc } from "firebase/firestore";

export const useProductById = (id) => {
    const [product, setProduct] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(true);
    React.useEffect(() => {
        const db = getFirestore();
        const productRef = doc(db, "products", id);
        getDoc(productRef).then((doc) => {
            setProduct({ id: doc.id, ...doc.data() })
        }).catch(() => setErrror(true)).finally(() => setLoading(false));


    }, [id]);

    return { product, loading };
};