<?php

include_once('lib/twitter/TwitterAPIExchange.php');

class Twitter {

    public function getTuits() {
        $settings = array(
            'oauth_access_token' => "126605441-iEXFdlxTDCSRTvts3pVm49JFh6M7X1ybK1UvvVye",
            'oauth_access_token_secret' => "23JkZekNAY6icRzSxvOPJczTTlX0LgtAUTcO5lmMDMGuX",
            'consumer_key' => "5rXPHs44oEvsZs2uTmfidCFTw",
            'consumer_secret' => "A1JNxNpqGaJMaowwVybY0vG71UCTBAapT8R2V5vw81XJ6gV3o8"
        );

        $url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
        $getfield = '?screen_name=leandroarturi&count=5';
        $requestMethod = 'GET';
        $twitter = new TwitterAPIExchange($settings);
        $json = $twitter->setGetfield($getfield)
                ->buildOauth($url, $requestMethod)
                ->performRequest();

        return json_decode($json);
        
    }

}

