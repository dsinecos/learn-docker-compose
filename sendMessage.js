const amqp = require('amqplib/callback_api');

amqp.connect('amqp://guest:guest@rabbitmq:5672', (err, conn) => {

    if (err) {
        console.log(`Error ${err}`);
    }
    conn.createChannel((error, ch) => {
        if (error) {
            console.log(`Error ${err}`);
        }

        const q = 'hello';
        const msg = 'Hello World!';

        ch.assertQueue(q, { durable: true });
        ch.sendToQueue(q, Buffer.from(msg), { persistent: true });
        console.log(`Sent ${msg}`);
    });
    setTimeout(() => { conn.close(); process.exit(0); }, 500);
});
