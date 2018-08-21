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
    { id: 'wgd', label: 'War God Descendant' level: 1 },
    { id: 'wgd_branch', shape: 'dot', size: 0, level: 1.4999 },
    { id: 'loip_parent', shape: 'dot', size: 0, level: 1.5 },
    { id: 'loip', label: 'League of Iron Preparation', level: 2 },
    { id: 'twtt', label: 'Tiger Warrior Training Technique', level: 3 },
    { id: 'icp_parent', shape: 'dot', size: 0, level: 1.5 },
    { id: 'icp', label: "Immortal Commander's Presence", level: 2 },
    { id: 'rsg_parent', shape: 'dot', size: 0, level: 1.5 },
    { id: 'rsg', label: 'Rout-Stemming Gesture', level: 2 },
    { id: 'motui', label: 'Magnanimity of the Unstoppable Icon', level: 3 },
    { id: 'motr', label: 'March of the Returner', level: 4 },
    { id: 'sotda', label: 'Supremacy of the Divine Army', level: 5 },
    { id: 'hbu_parent', shape: 'dot', size: 0, level: 1.5 },
    { id: 'hbu', label: 'Holistic Battle Understanding', level: 2 },
    { id: 'hbu_branch', shape: 'dot', size: 0, level: 2.4999 },
    { id: 'rrg_parent', shape: 'dot', size: 0, level: 2.5 },
    { id: 'rrg', label: 'Redoubt-Raising Gesture', level: 3 },
    { id: 'rrg_branch', shape: 'dot', size: 0, level: 3.499 },
    { id: 'gotass_parent', shape: 'dot', size: 0, level: 3.5 },
    { id: 'gotass', label: 'General of the All-Seeing Sun', level: 4 },
    { id: 'gotass_branch', shape: 'dot', size: 0, level: 4.4999 },
    { id: 'fgm_parent', shape: 'dot', size: 0, level: 4.5 },
    { id: 'fgm', label: 'Four Glories Meditation', level: 5 },
    { id: 'owff', label: 'One With Five Forces', level: 6 },
    { id: 'usc_parent', shape: 'dot', size: 0, level: 2.5 },
    { id: 'usc', label: 'Unstoppable Solar Conqueror', level: 3 },
    { id: 'ibkp', label: 'Ideal Battle Knowledge Prana', level: 1 },
    { id: 'ibkp_branch', shape: 'dot', size: 0, level: 1.4999 },
    { id: 'bpa_parent', shape: 'dot', size: 0, level: 1.5 },
    { id: 'bpa', label: 'Battle Path Ascendant', level: 2 },
    { id: 'iwt_parent', shape: 'dot', size: 0, level: 1.5 },
    { id: 'iwt', label: "Immortal Warlord's Tactic", level: 2 },
    { id: 'twg', label: "Transcendant Warlord's Genius", level: 3.5 },
    { id: 'bvf_parent', shape: 'dot', size: 0, level: 4.5 },
    { id: 'bvf', label: "Battle-Visionary's Foresight", level: 5 },
  ];
  /*nodes = nodes.map(n =>
    Object.assign({}, n, { image: 'cascade_box_full.svg', shape: 'image' }),
  );*/
  console.log(nodes);
  edges = [
    { from: 'wgd', to: 'wgd_branch' },
    { from: 'wgd_branch', to: 'loip_parent' },
    { from: 'loip_parent', to: 'loip' },
    { from: 'loip', to: 'twtt' },
    { from: 'wgd_branch', to: 'icp_parent' },
    { from: 'icp_parent', to: 'icp' },
    { from: 'wgd_branch', to: 'rsg_parent' },
    { from: 'rsg_parent', to: 'rsg' },
    { from: 'rsg', to: 'motui' },
    { from: 'motui', to: 'motr' },
    { from: 'motr', to: 'sotda' },
    { from: 'wgd_branch', to: 'hbu_parent' },
    { from: 'hbu_parent', to: 'hbu' },
    { from: 'hbu', to: 'hbu_branch' },
    { from: 'hbu_branch', to: 'rrg_parent' },
    { from: 'rrg_parent', to: 'rrg' },
    { from: 'rrg', to: 'rrg_branch' },
    { from: 'rrg_branch', to: 'gotass_parent' },
    { from: 'gotass_parent', to: 'gotass' },
    { from: 'gotass', to: 'gotass_branch' },
    { from: 'gotass_branch', to: 'fgm_parent' },
    { from: 'fgm_parent', to: 'fgm' },
    { from: 'fgm', to: 'owff' },
    { from: 'hbu_branch', to: 'usc_parent' },
    { from: 'usc_parent', to: 'usc' },
    { from: 'ibkp', to: 'ibkp_branch' },
    { from: 'ibkp_branch', to: 'bpa_parent' },
    { from: 'bpa_parent', to: 'bpa' },
    { from: 'bpa', to: 'twg' },
    { from: 'twg', to: 'bvf_parent' },
    { from: 'gotass_branch', to: 'bvf_parent' },
    { from: 'bvf_parent', to: 'bvf' },
    { from: 'ibkp_branch', to: 'iwt_parent' },
    { from: 'iwt_parent', to: 'iwt' },
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
