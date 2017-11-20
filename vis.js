// vis.js boilerplate
var nodes = null;
var edges = null;
var network = null;

// network.on('stabilizationIterationsDone', function() {
//   network.setOptions({ physics: false });
// });
//
//     // Called when the Visualization API is loaded.
function draw() {
  nodes = [
    { id: 'wgd', label: 'War God Descendant', level: 1 },
    { id: 'loip', label: 'League of Iron Preparation', level: 2 },
    { id: 'twtt', label: 'Tiger Warrior Training Technique', level: 3 },
    { id: 'icp', label: "Immortal Commander's Presence", level: 2 },
    { id: 'rsg', label: 'Rout-Stemming Gesture', level: 2 },
    { id: 'motui', label: 'Magnanimity of the Unstoppable Icon', level: 3 },
    { id: 'motr', label: 'March of the Returner', level: 4 },
    { id: 'sotda', label: 'Supremacy of the Divine Army', level: 5 },
    { id: 'hbu', label: 'Holistic Battle Understanding', level: 2 },
    { id: 'rrg', label: 'Redoubt-Raising Gesture', level: 3 },
    { id: 'gotass', label: 'General of the All-Seeing Sun', level: 4 },
    { id: 'fgm', label: 'Four Glories Meditation', level: 5 },
    { id: 'owff', label: 'One With Five Forces', level: 6 },
    { id: 'usc', label: 'Unstoppable Solar Conqueror', level: 3 },
    { id: 'ibkp', label: 'Ideal Battle Knowledge Prana', level: 1 },
    { id: 'bpa', label: 'Battle Path Ascendant', level: 2 },
    { id: 'iwt', label: "Immortal Warlord's Tactic", level: 2 },
    { id: 'twg', label: "Transcendant Warlord's Genius", level: 4 },
    { id: 'bvf', label: "Battle-Visionary's Foresight", level: 5 },
  ];
  nodes = nodes.map(n =>
    Object.assign({}, n, { image: 'cascade_box_full.svg', shape: 'image' }),
  );
  console.log(nodes);
  edges = [
    { from: 'wgd', to: 'loip' },
    { from: 'wgd', to: 'icp' },
    { from: 'wgd', to: 'rsg' },
    { from: 'wgd', to: 'hbu' },
    { from: 'loip', to: 'twtt' },
    { from: 'rsg', to: 'motui' },
    { from: 'hbu', to: 'rrg' },
    { from: 'hbu', to: 'usc' },
    { from: 'motui', to: 'motr' },
    { from: 'motr', to: 'sotda' },
    { from: 'rrg', to: 'gotass' },
    { from: 'gotass', to: 'fgm' },
    { from: 'fgm', to: 'owff' },
    { from: 'ibkp', to: 'bpa' },
    { from: 'ibkp', to: 'iwt' },
    { from: 'bpa', to: 'twg' },
    { from: 'twg', to: 'bvf' },
    { from: 'gotass', to: 'bvf' },
  ];
  // create a network
  var container = document.getElementById('network');
  var nodesData = new vis.DataSet(nodes);
  var edgesData = new vis.DataSet(edges);
  var data = {
    nodes: nodesData,
    edges: edgesData,
  };

  var options = {
    layout: {
      hierarchical: {
        direction: 'UD',
        sortMethod: 'directed',
        levelSeparation: 100,
        nodeSpacing: 350,
        treeSpacing: 200,
        blockShifting: true,
        edgeMinimization: true,
        parentCentralization: true,
      },
    },
    interaction: { dragNodes: false },
    physics: {
      enabled: false,
    },
    // configure: {
    //   filter: function(option, path) {
    //     if (path.indexOf('hierarchical') !== -1) {
    //       return true;
    //     }
    //     return false;
    //   },
    //   showButton: false,
    // },
  };
  network = new vis.Network(container, data, options);
}

console.log(draw);
window.onload = draw();
