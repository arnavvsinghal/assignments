const zod = require('zod');

const todoSchema = zod.object({
    title: zod.string().min(1),
    description: zod.string().min(1)
});

module.exports = todoSchema;
