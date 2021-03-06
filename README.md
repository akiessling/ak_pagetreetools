Pagetree enhancements for TYPO3
-------------------------------

This extension adds new context menu items to the TYPO3 pagetree in the backend to quickly switch the settings for "Hidden in Menu", "Use Protocol" and "Include in search".
The items for "Use Protocol" are only shown, if the lockSSL settings for the backend are set or the checkbox in the extension config is ticked. It only switches between "Default" and "https", because forcing "http" kills the previews from the backend, if it runs on SSL.

Much of the code was inspired by [sm_clearcachecm](http://typo3.org/extensions/repository/view/sm_clearcachecm), an extension that adds context menu items to quickly clear page caches.

Unfortunately, the implementation of the page tree does not allow to add custom methods for the display conditions, so i needed an Xclass to add checks for "exclude fields".

If you want to disable menu items, place the following config in your user or group TS config:
> options.contextMenu.table.pages.disableItems = urlScheme,hideInMenu,excludeFromSearch