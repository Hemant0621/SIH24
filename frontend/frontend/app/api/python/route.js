import { spawn } from 'child_process';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const { inputData } = await req.json();
    console.log(inputData)
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python3', ['./vivek.py', JSON.stringify(inputData)]);

        pythonProcess.stdout.on('data', (data) => {
            console.log(data.toString())
            resolve(NextResponse.json({ output: data.toString() }));
        });

        pythonProcess.stderr.on('data', (error) => {
            reject(NextResponse.json({ error: error.toString() }));
        });
    });
}
