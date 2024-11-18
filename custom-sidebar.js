// custom-sidebar.js

// Custom function to modify sidebar items
function enhanceSidebarItems(items, dirName) {
  // Ignore files under the fabric folder in the ai-unlimited sidebar
  if (dirName !== 'fabric') {
    items = items.filter(
      (item) =>
        (item.type === 'doc' && item.id.split('/')[0] !== 'fabric') ||
        (item.type === 'category' &&
          item.link?.id.split('/')[0] !== 'fabric' &&
          item.label !== 'fabric')
    );
  }
  return items;
}

// Custom sidebarItemsGenerator function
async function customSidebarItemsGenerator({
  defaultSidebarItemsGenerator,
  ...args
}) {
  const { dirName } = args.item;
  const sidebarItems = await defaultSidebarItemsGenerator(args);

  return enhanceSidebarItems(sidebarItems, dirName);
}

module.exports = {
  sidebarItemsGenerator: customSidebarItemsGenerator,
};
