<?php

    require_once('instagram_basic_display_api.php');

    $params = array (
        'get code' => isset( $_GET['code'])? $_GET['code'] : ''
    );

    $ig = new instagram_basic_display_api($params);

?>
<h2>
    API Instagram
</h2>
<hr>
<a href="<?php echo $ig->authorizationUrl; ?>">
    Authorize w/Instagram
</a>