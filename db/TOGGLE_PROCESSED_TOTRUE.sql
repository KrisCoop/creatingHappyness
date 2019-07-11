UPDATE messages
SET is_processed = 'true'
WHERE id = $1;

SELECT * FROM messages;