<?php
if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}

if (TYPO3_MODE == 'BE')	{
    $extPath = \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath($_EXTKEY);
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerExtDirectComponent(
        'TYPO3.AkPagetreetools.ClickmenuAction','AndreasKiessling\\AkPagetreetools\\Hooks\\ClickMenuAction'
    );

    $GLOBALS['TBE_MODULES']['_configuration'][$_EXTKEY]['jsFiles']['TreeActions'] = 'EXT:ak_pagetreetools/Resources/Public/Js/TreeActions.js';

    \AndreasKiessling\AkPagetreetools\Hooks\ClickMenuAction::addContextMenuItems();
}