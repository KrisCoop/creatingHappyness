UPDATE messages
SET is_processed = 'false'
WHERE id = $1;

SELECT * FROM messages;