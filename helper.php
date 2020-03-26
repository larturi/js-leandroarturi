<?php

function numero_a_letra($num) {

    switch ($num) {
        case 8:
            return 'ocho';
            break;
        case 9:
            return 'nueve';
            break;
        case 10:
            return 'diez';
            break;
        case 11:
            return 'once';
            break;
        case 12:
            return 'doce';
            break;
        case 13:
            return 'trece';
            break;
        case 14:
            return 'catorce';
            break;
        case 15:
            return 'quince';
            break;
        case 16:
            return 'dieciséis';
            break;
        case 17:
            return 'diecisiete';
            break;
        case 18:
            return 'dieciocho';
            break;
        case 19:
            return 'diecinueve';
            break;
        case 20:
            return 'veinte';
            break;
    }
}

function getAmbiente(){
    return "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
}

function getExperiencia() {
    $datetimeInicioLaboral = new DateTime('2006-09-01');
    $datetimeHoy = new DateTime("now");
    $interval = $datetimeInicioLaboral->diff($datetimeHoy);
    return numero_a_letra($interval->y);
}

function linkEntitiesWithinText($apiResponseTweetObject) {

    // Convert tweet text to array of one-character strings
    // $characters = str_split($apiResponseTweetObject->text);
    $characters = preg_split('//u', $apiResponseTweetObject->text, null, PREG_SPLIT_NO_EMPTY);

    // Insert starting and closing link tags at indices...
    // ... for @user_mentions

    if ($apiResponseTweetObject->entities->user_mentions != null) {
        foreach ($apiResponseTweetObject->entities->user_mentions as $entity) {
            $link = "https://twitter.com/" . $entity->screen_name;
            $characters[$entity->indices[0]] = "<a target=\"_blank\" href=\"$link\">" . $characters[$entity->indices[0]];
            $characters[$entity->indices[1] - 1] .= "</a>";
        }
    }


    // ... for #hashtags
    if ($apiResponseTweetObject->entities->hashtags != null) {
        foreach ($apiResponseTweetObject->entities->hashtags as $entity) {
            $link = "https://twitter.com/search?q=%23" . $entity->text;
            $characters[$entity->indices[0]] = "<a target=\"_blank\" href=\"$link\">" . $characters[$entity->indices[0]];
            $characters[$entity->indices[1] - 1] .= "</a>";
        }
    }


    // ... for http://urls
    if ($apiResponseTweetObject->entities->urls != null) {
        foreach ($apiResponseTweetObject->entities->urls as $entity) {
            $link = $entity->expanded_url;
            $characters[$entity->indices[0]] = "<a target=\"_blank\" href=\"$link\">" . $characters[$entity->indices[0]];
            $characters[$entity->indices[1] - 1] .= "</a>";
        }
    }


    // ... for media
    if ($apiResponseTweetObject->entities->media != null) {
        foreach ($apiResponseTweetObject->entities->media as $entity) {
            $link = $entity->expanded_url;
            $characters[$entity->indices[0]] = "<a target=\"_blank\" href=\"$link\">" . $characters[$entity->indices[0]];
            $characters[$entity->indices[1] - 1] .= "</a>";
        }
    }


    // Convert array back to string
    return implode('', $characters);
}

function tweetTime($t) {
    /*     * ** Begin Time Loop *** */
    // Set time zone
    date_default_timezone_set('America/New_York');
    // Get Current Server Time
    $server_time = $_SERVER['REQUEST_TIME'];
    // Convert Twitter Time to UNIX
    $new_tweet_time = strtotime($t);
    // Set Up Output for the Timestamp if over 24 hours
    $this_tweet_day = date('D. M j, Y', strtotime($t));
    // Subtract Twitter time from current server time
    $time = $server_time - $new_tweet_time;
    // less than an hour, output 'minutes' messaging
    if ($time < 3599) {
        $time = 'Hace ' . round($time / 60) . ' m';
    }
    // less than a day but over an hour, output 'hours' messaging 
    else if ($time >= 3600 && $time <= 86400) {
        $time = 'Hace ' . round($time / 3600) . ' h';
    }
    // dias
    else if ($time > 86400 && $time <= 2592000) {
        $time = 'Hace ' . round($time/24/3600) . ' d';
    }
    // over a day, output the $tweet_day formatting
    else if ($time > 2592000) {
        $time = $this_tweet_day;
    }
    // return final time from tweetTime()
    return $time;
    /*     * ** End Time Loop *** */
}

?>