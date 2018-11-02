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

        ch.assertQueue(q, { durable: true });
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
        ch.consume(q, (msg) => {
            console.log(" [x] Received %s", msg.content.toString());
        }, { noAck: true });
    });
});
