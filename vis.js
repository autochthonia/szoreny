// vis.js boilerplate
const nodes = [
  { id: 'wgd', label: 'War God Descendant' },
  { id: 'loip', label: 'League of Iron Preparation' },
  { id: 'twtt', label: 'Tiger Warrior Training Technique' },
  { id: 'icp', label: "Immortal Commander's Presence" },
  { id: 'rsg', label: 'Rout-Stemming Gesture' },
  { id: 'motui', label: 'Magnanimity of the Unstoppable Icon' },
  { id: 'motr', label: 'March of the Returner' },
  { id: 'sotda', label: 'Supremacy of the Divine Army' },
  { id: 'hbu', label: 'Holistic Battle Understanding' },
  { id: 'rrg', label: 'Redoubt-Raising Gesture' },
  { id: 'gotass', label: 'General of the All-Seeing Sun' },
  { id: 'fgm', label: 'Four Glories Meditation' },
  { id: 'owff', label: 'One With Five Forces' },
  { id: 'usc', label: 'Unstoppable Solar Conqueror' },
  { id: 'ibkp', label: 'Ideal Battle Knowledge Prana' },
  { id: 'bpa', label: 'Battle Path Ascendant' },
  { id: 'iwt', label: "Immortal Warlord's Tactic" },
  { id: 'twg', label: "Transcendant Warlord's Genius" },
  { id: 'bvf', label: "Battle-Visionary's Foresight" },
];
const edges = [
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
var network = null;

var LENGTH_MAIN = 100,
  LENGTH_SERVER = 150,
  LENGTH_SUB = 50,
  WIDTH_SCALE = 2,
  GREEN = 'green',
  RED = '#C5000B',
  ORANGE = 'orange',
  //GRAY = '#666666',
  GRAY = 'gray',
  BLACK = '#2B1B17';

// create a network
var container = document.getElementById('network');
var nodesData = new vis.DataSet(nodes);
var edgesData = new vis.DataSet(edges);
var data = {
  nodes: nodesData,
  edges: edgesData,
};

var options = {};

network = new vis.Network(container, data, options);

network.on("stabilizationIterationsDone", function () {
    network.setOptions( { physics: false } );
});
