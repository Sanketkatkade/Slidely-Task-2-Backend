import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(bodyParser.json());

interface FormData {
    name: string;
    email: string;
    phone: string;
    github_link: string;
    stopwatch_time: string;
}
const dbFilePath = 'db.json';

const readResponsesFromFile = (): FormData[] => {
    try {
        if (fs.existsSync(dbFilePath)) {
            const data = fs.readFileSync(dbFilePath, 'utf-8');
            if (data.trim() === '') {
                return [];
            }
            return JSON.parse(data) as FormData[];
        } else {
            return [];
        }
    } catch (err) {
        console.error('Error reading responses from file:', err);
        return [];
    }
};

const writeResponsesToFile = (responses: FormData[]) => {
    try {
        fs.writeFileSync(dbFilePath, JSON.stringify(responses, null, 2), 'utf-8');
    } catch (err) {
        console.error('Error writing responses to file:', err);
    }
};

let responses: FormData[] = [];

app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send(true);
});

app.post('/submit', (req: Request, res: Response) => {
    const formData: FormData = req.body;
    const responses = readResponsesFromFile();
    responses.push(formData);
    writeResponsesToFile(responses);
    res.status(201).send('Form submitted successfully');
});

app.get('/read', (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string, 10);
    const responses = readResponsesFromFile();

    if (!isNaN(index)) {
        if (index >= 0 && index < responses.length) {
            res.json(responses[index]);
        } else {
            res.status(404).send('Index out of range');
        }
    } else {
        res.status(200).json(responses);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
