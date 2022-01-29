"""
    Optimal tree parser
"""

from treelib import Node, Tree

tree = Tree()
created = tree.create_node("root", data="salet")

running_parent = [
    created.identifier,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]

with open('normal.txt', 'r') as file:
    
    for line in file:
        
        words = line.split()
        level = int( words[0][-1] )

        words.pop()

        for result, word in zip(words[0::2], words[1::2]):
            
            created = tree.create_node( result[:-1], data=word, parent=running_parent[level-1])
            running_parent[level] = created.identifier
            level += 1

with open('strategy.json', 'w') as outfile:
    outfile.write(tree.to_json(with_data=True))