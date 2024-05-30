import { document } from "@/app/mock/document";

export default function handler(req, res) {
    if (req.method === 'GET') {
        const { id } = req.query;
        res.status(200).json(document)
    }
    else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}