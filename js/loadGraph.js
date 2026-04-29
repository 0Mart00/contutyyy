
const initialData = {
    nodes: fullData.nodes.filter(n => n.level <= 1),
    links: fullData.links.filter(l => {
      const s = fullData.nodes.find(n => n.id === l.source);
      const t = fullData.nodes.find(n => n.id === l.target);
      return s.level <= 1 && t.level <= 1;
    })
  };

  const Graph = ForceGraph3D()(document.getElementById('3d-graph'))
    .graphData(initialData)
    .nodeLabel('name')
    .nodeColor(node => node.color)
    .nodeVal(node => node.size)
    .linkDirectionalParticles(4)
    .linkDirectionalParticleSpeed(0.006)
    .backgroundColor('#000011')
    .onNodeClick(node => {
      document.getElementById('welcome-view').style.display = 'none';
      document.getElementById('node-view').style.display = 'block';
      
      document.getElementById('info-name').textContent = node.name;
      document.getElementById('info-group').textContent = node.group;
      document.getElementById('info-description').textContent = node.description;

      if (node.id === "1") {
        Graph.graphData(fullData);
      }

      const distance = 120;
      const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
      Graph.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio },
        node, 
        1500
      );
    });

  const slider = document.getElementById('time-slider');
  slider.addEventListener('input', () => {
    Graph.linkDirectionalParticleSpeed(+slider.value);
  });

  window.addEventListener('resize', () => {
    Graph.width(window.innerWidth);
    Graph.height(window.innerHeight);
  });