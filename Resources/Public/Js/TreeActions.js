Ext.onReady(function() {
    Ext.apply(TYPO3.Components.PageTree.Actions, {
        setHiddenInMenus: function(node, tree) {
            TYPO3.AkPagetreetools.ClickmenuAction.setHiddenInMenus(
                node.attributes.nodeData,
                function(response) {
                    if (this.evaluateResponse(response)) {
                        this.updateNode(node, node.isExpanded(), response);
                    }
                },
                this
            );
        }
    });

    Ext.apply(TYPO3.Components.PageTree.Actions, {
        setVisibleInMenus: function(node, tree) {
            TYPO3.AkPagetreetools.ClickmenuAction.setVisibleInMenus(
                node.attributes.nodeData,
                function(response) {
                    if (this.evaluateResponse(response)) {
                        this.updateNode(node, node.isExpanded(), response);
                    }
                },
                this
            );
        }
    });

    Ext.apply(TYPO3.Components.PageTree.Actions, {
        setForceSsl: function(node, tree) {
            TYPO3.AkPagetreetools.ClickmenuAction.setForceSsl(
                node.attributes.nodeData,
                function(response) {
                    if (this.evaluateResponse(response)) {
                        this.updateNode(node, node.isExpanded(), response);
                    }
                },
                this
            );
        }
    });

    Ext.apply(TYPO3.Components.PageTree.Actions, {
        setNoForceSsl: function(node, tree) {
            TYPO3.AkPagetreetools.ClickmenuAction.setNoForceSsl(
                node.attributes.nodeData,
                function(response) {
                    if (this.evaluateResponse(response)) {
                        this.updateNode(node, node.isExpanded(), response);
                    }
                },
                this
            );
        }
    });

    Ext.apply(TYPO3.Components.PageTree.Actions, {
        setExcludeFromSearch: function(node, tree) {
            TYPO3.AkPagetreetools.ClickmenuAction.setExcludeFromSearch(
                node.attributes.nodeData,
                function(response) {
                    if (this.evaluateResponse(response)) {
                        this.updateNode(node, node.isExpanded(), response);
                    }
                },
                this
            );
        }
    });

    Ext.apply(TYPO3.Components.PageTree.Actions, {
        setIncludeInSearch: function(node, tree) {
            TYPO3.AkPagetreetools.ClickmenuAction.setIncludeInSearch(
                node.attributes.nodeData,
                function(response) {
                    if (this.evaluateResponse(response)) {
                        this.updateNode(node, node.isExpanded(), response);
                    }
                },
                this
            );
        }
    });
});
