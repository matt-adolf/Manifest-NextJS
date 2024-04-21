import { documents } from "@/app/mock/documents";

export default function handler(req, res) {
    if (req.method === 'GET') {
        const { id } = req.query;
        res.status(200).json(documents)
    }
    else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}