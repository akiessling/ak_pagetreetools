Ext.onReady(function () {
  Ext.apply(TYPO3.Components.PageTree.Actions, {
    setHiddenInMenus: function (node, tree) {
      TYPO3.AkPagetreetools.ClickmenuAction.setHiddenInMenus(
          node.attributes.nodeData,
          function (response) {
            if (this.evaluateResponse(response)) {
              this.updateNode(node, node.isExpanded(), response);
            }
          },
          this
      );
    },
    setVisibleInMenus: function (node, tree) {
      TYPO3.AkPagetreetools.ClickmenuAction.setVisibleInMenus(
          node.attributes.nodeData,
          function (response) {
            if (this.evaluateResponse(response)) {
              this.updateNode(node, node.isExpanded(), response);
            }
          },
          this
      );
    },
    setForceSsl: function (node, tree) {
      TYPO3.AkPagetreetools.ClickmenuAction.setForceSsl(
          node.attributes.nodeData,
          function (response) {
            if (this.evaluateResponse(response)) {
              this.updateNode(node, node.isExpanded(), response);
            }
          },
          this
      );
    },
    setNoForceSsl: function (node, tree) {
      TYPO3.AkPagetreetools.ClickmenuAction.setNoForceSsl(
          node.attributes.nodeData,
          function (response) {
            if (this.evaluateResponse(response)) {
              this.updateNode(node, node.isExpanded(), response);
            }
          },
          this
      );
    },
    setExcludeFromSearch: function (node, tree) {
      TYPO3.AkPagetreetools.ClickmenuAction.setExcludeFromSearch(
          node.attributes.nodeData,
          function (response) {
            if (this.evaluateResponse(response)) {
              this.updateNode(node, node.isExpanded(), response);
            }
          },
          this
      );
    },
    setIncludeInSearch: function (node, tree) {
      TYPO3.AkPagetreetools.ClickmenuAction.setIncludeInSearch(
          node.attributes.nodeData,
          function (response) {
            if (this.evaluateResponse(response)) {
              this.updateNode(node, node.isExpanded(), response);
            }
          },
          this
      );
    }
  });
});
