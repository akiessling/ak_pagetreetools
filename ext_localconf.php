<?php
if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}

if (TYPO3_MODE == 'BE')	{
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['Objects']['TYPO3\\CMS\\Backend\\Tree\\Pagetree\\PagetreeNode'] = array(
        'className' => 'AndreasKiessling\\AkPagetreetools\\Xclass\\PagetreeNode',
    );
}