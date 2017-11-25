var war = {
  nodes: [
      {id: 'wgd', label: "War God Descendant"},
      {id: 'loip', label: "League of Iron Preparation"},
      {id: 'twtt', label: "Tiger Warrior Training Technique"},
      {id: 'icp', label: "Immortal Commander's Presence"},
      {id: 'rsg', label: "Rout-Stemming Gesture"},
      {id: 'motui', label: "Magnanimity of the Unstoppable Icon"},
      {id: 'motr', label: "March of the Returner"},
      {id: 'sotda', label: "Supremacy of the Divine Army"},
      {id: 'hbu', label: "Holistic Battle Understanding"},
      {id: 'rrg', label: "Redoubt-Raising Gesture"},
      {id: 'gotass', label: "General of the All-Seeing Sun"},
      {id: 'fgm', label: "Four Glories Meditation"},
      {id: 'owff', label: "One With Five Forces"},
      {id: 'usc', label: "Unstoppable Solar Conqueror"},
      {id: 'ibkp', label: "Ideal Battle Knowledge Prana"},
      {id: 'bpa', label: "Battle Path Ascendant"},
      {id: 'iwt', label: "Immortal Warlord's Tactic"},
      {id: 'twg', label: "Transcendant Warlord's Genius"},
      {id: 'bvf', label: "Battle-Visionary's Foresight"}
    ],
  edges: [
      {from: 'wgd', to: 'loip'},
      {from: 'wgd', to: 'icp'},
      {from: 'wgd', to: 'rsg'},
      {from: 'wgd', to: 'hbu'},
      {from: 'loip', to: 'twtt'},
      {from: 'rsg', to: 'motui'},
      {from: 'hbu', to: 'rrg'},
      {from: 'hbu', to: 'usc'},
      {from: 'motui', to: 'motr'},
      {from: 'motr', to: 'sotda'},
      {from: 'rrg', to: 'gotass'},
      {from: 'gotass', to: 'fgm'},
      {from: 'fgm', to: 'owff'},
      {from: 'ibkp', to: 'bpa'},
      {from: 'ibkp', to: 'iwt'},
      {from: 'bpa', to: 'twg'},
      {from: 'twg', to: 'bvf'},
      {from: 'gotass', to: 'bvf'}
    ]
}

/// Graph code
let g = new dagreD3.graphlib.Graph().setGraph({ directed: true });

// nodes
war.nodes.forEach( function(charm) {
  g.setNode(charm.id, charm.label);
});
g.nodes().forEach( function(n) {
    console.log(n);
});


// edges
war.edges.forEach( function(chedge) {
  g.setEdge(chedge.from, chedge.to, "");

});
g.edges().forEach( function(n) {
    console.log(n);
});


var svg = d3.select("svg"),
    inner = svg.select("g");

// Zoom support
var zoom = d3.zoom().on("zoom", function() {
  inner.attr("transform", "translate(" +d3.event.translate + ")" +
                "scale(" + d3.event.scale + ")" );
});
svg.call(zoom);

// Renderer code
var renderer = new dagreD3.render("graph");
renderer(inner, g);

var initialScale = 0.75;
zoom.translate([(svg.attr("width") + g.graph().width * initialScale) / 2, 20])
    .scale(initialScale)
    .event(svg);
svg.attr('height', g.graph().height * initialScale + 40);
