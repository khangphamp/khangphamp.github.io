<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'database_demo' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '7<uZ=K 4eZk1Fb#mrZ8c!05QnU.+>8aax.++/ ha3Mp8l(x[c<BLW?E=G+rL0c{7' );
define( 'SECURE_AUTH_KEY',  'z+J3pjR0BjDZ/*ngZ*2|AX~1{<6%)d<kKmN#;<F-;l5,E9RBg&Y(G:nakXjZ5d5|' );
define( 'LOGGED_IN_KEY',    '@K(0Zzr/1_a{Xj2CAP4sNz B(B]hZGb;G*gsd[Ia@4o6/RD-_r)sI*X]|otT_FwI' );
define( 'NONCE_KEY',        '>t2y )73P_/]w^G5#UTrM]I:-28;d({OkDux)B?sXI)Z6;1GB}${ p:44n#CGl;2' );
define( 'AUTH_SALT',        ' `lb;#$c@K{VKrNLlWGKLe3Wnjdz`y@.8+Kko4Xx&_E0LW!b}Ab$EQ-|M9S$I`qx' );
define( 'SECURE_AUTH_SALT', '?oO7>P( qyvu1U%<k(?eY/MW.{V06W+htF#T=Fl-MU[fBz>}4/}$y!v=1PQ0IvXD' );
define( 'LOGGED_IN_SALT',   '(k*UMRA|JELTwjp8=8~{p9Er#i.[1~C+y;yl_fe<WFnb}{1SigKVmbf$CmhOYVR4' );
define( 'NONCE_SALT',       '?eg*Sf8o[UGo;K2}| ),mu#8u?hn0plSOPnX9N55J&z :X8McQt0@P9_mwLQ{L.g' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
