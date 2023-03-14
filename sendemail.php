<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $name = strip_tags(trim($_POST["name"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $message = trim($_POST["message"]);

  // Check for empty fields
  if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Please fill out all fields.";
    exit;
  }

  // Set recipient email address
  $to = "mutoorom@outlook.com";

  // Set email subject and message body
  $subject = "New message from $name";
  $body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";

  // Set email headers
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Send email
  if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo "Thanks for contacting us!";
  } else {
    http_response_code(500);
    echo "Oops! Something went wrong and we couldn't send your message.";
  }

} else {
  http_response_code(403);
  echo "There was a problem with your submission, please try again.";
}
