/**
 Given a binary tree, find the closest LEAF node to the target.

 public TreeNode closestLeaf(TreeNode root, TreeNode target) {
        if(root == null || target == null) {
            return null;
        }
        Map> mapping = new HashMap();
        buildAdjList(mapping, root, null);

        Queue queue = new LinkedList();
        Set visited = new HashSet();

        for (TreeNode node: mapping.keySet()) {
            if (node != null && node == target) {
                queue.add(node);
                visited.add(node);
                break;
            }
        }

        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            if (node != null) {
                if (mapping.get(node).size() <= 1) {
                    return node;
                }
                for (TreeNode n: mapping.get(node)) {
                    if (!visited.contains(n)) {
                        visited.add(n);
                        queue.add(n);
                    }
                }
            }
        }
        return null;
    }

 public void buildAdjList(Map> mapping, TreeNode node, TreeNode p) {
        if (!mapping.containsKey(node)) {
            mapping.put(node, new ArrayList<>());
        }
        if (!mapping.containsKey(p)) {
            mapping.put(p, new ArrayList<>());
        }
        if (node != null) {
            mapping.get(p).add(node);
            mapping.get(node).add(p);
            if (node.left != null) {
                buildAdjList(mapping, node.left, node);
            }
            if (node.right != null) {
                buildAdjList(mapping, node.right, node);
            }
        }
    }
 */