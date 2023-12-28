
//adicionar no aba functions.php no wordpress
function add_jquery_mask() {
    wp_enqueue_script('jquery-mask', 'https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'add_jquery_mask');

// adicionar no trecho de codigo HTML do elementor pro
jQuery(document).ready(function($) {
    $('#id_do_campo').mask('000.000.000-00');
});

jQuery(document).ready(function($) {
    $('#id_do_campo').mask('00.000.000/0000-00');
});

