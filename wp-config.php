<?php
define( 'WP_CACHE', true );

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Eu<O+ I,R3~M%qhY!9L3~`MpyS,+LCjDn4?#Ix3FUuE&9`JgfuiXs^4WMm0<*/A`' );
define( 'SECURE_AUTH_KEY',  '+7W4%D<_I5c0:M8BLFYIzLeV];GEN7Ea#&leq2J(-q&JAEn%ASe-Fi.R6YW^LIW$' );
define( 'LOGGED_IN_KEY',    '~ZQz6F6x:Txjz?E;aI4`qS4m`!zfuJ B&8Dg{84NO!34D%|w,X*N~owr%k(1@5%s' );
define( 'NONCE_KEY',        'Xji9?JWJ?=0a?5zi~cHlBl/zDEF.MKd_]s]_i|:(]0,w:F2!Ny_kyNz]qX1~rcuH' );
define( 'AUTH_SALT',        'R}^yIBwteU7|/c{XJ_6.8<9EIVA21w.2,e^3>toBR@r;e|uwqW2V?{PnI`Ao$mK_' );
define( 'SECURE_AUTH_SALT', 'f}ED3e%4iYv5F*898A<Qn=GM`40x!R[U6TRc{`2.h*fX J^r|t`;h9{zZ7P&@n@U' );
define( 'LOGGED_IN_SALT',   'nNuTNE4J>Ih:D[SOSN/Ph?CSo>o9mhU8!%J jh63Ge9j+>@BBt028;R&FNs$2T:`' );
define( 'NONCE_SALT',       '~r:ORjPi]..Y#+,$D#k6pY ,wUCR_R0NL;/.-obx4Qmc|2O;> !:w%w)NkMnAo/l' );

/**#@-*/

/**
 * WordPress database table prefix.
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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
