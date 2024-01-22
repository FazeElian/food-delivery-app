import { useEffect } from "react";

export const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = `Food Delivery | ${title}`;
    }, [title]);

    return null;
}