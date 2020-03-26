<meta charset="utf-8">
<?php
include_once '../tw.php';
$tw = new Twitter();

$list_tuits = $tw->getTuits();

echo "<pre>" . print_r($list_tuits[0]->user->profile_image_url, true) . "</pre>"; exit;

foreach ($list_tuits as $tweet) {

    //echo "<pre>" . print_r($t, true) . "</pre>";
    //echo "<pre>" . print_r(substr(trim($t->text), 0, $t->entities->urls[0]->indices[0]+4) . ' ' . $t->entities->urls[0]->url, true) . "</pre>";
    //echo "<pre>" . print_r($t->entities->media[0]->url, true) . "</pre>";
    //exit;

    echo linkEntitiesWithinText($tweet) . "<br/>";
}

function linkEntitiesWithinText($apiResponseTweetObject) {

    // Convert tweet text to array of one-character strings
    // $characters = str_split($apiResponseTweetObject->text);
    $characters = preg_split('//u', $apiResponseTweetObject->text, null, PREG_SPLIT_NO_EMPTY);

    // Insert starting and closing link tags at indices...
    // ... for @user_mentions
    foreach ($apiResponseTweetObject->entities->user_mentions as $entity) {
        $link = "https://twitter.com/" . $entity->screen_name;
        $characters[$entity->indices[0]] = "<a href=\"$link\">" . $characters[$entity->indices[0]];
        $characters[$entity->indices[1] - 1] .= "</a>";
    }

    // ... for #hashtags
    foreach ($apiResponseTweetObject->entities->hashtags as $entity) {
        $link = "https://twitter.com/search?q=%23" . $entity->text;
        $characters[$entity->indices[0]] = "<a href=\"$link\">" . $characters[$entity->indices[0]];
        $characters[$entity->indices[1] - 1] .= "</a>";
    }

    // ... for http://urls
    foreach ($apiResponseTweetObject->entities->urls as $entity) {
        $link = $entity->expanded_url;
        $characters[$entity->indices[0]] = "<a href=\"$link\">" . $characters[$entity->indices[0]];
        $characters[$entity->indices[1] - 1] .= "</a>";
    }

    // ... for media
    foreach ($apiResponseTweetObject->entities->media as $entity) {
        $link = $entity->expanded_url;
        $characters[$entity->indices[0]] = "<a href=\"$link\">" . $characters[$entity->indices[0]];
        $characters[$entity->indices[1] - 1] .= "</a>";
    }

    // Convert array back to string
    return implode('', $characters);
}
?>