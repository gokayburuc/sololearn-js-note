import os
import pandas as pd 
import sqlite3 

x = os.listdir(os.getcwd())
cwd = os.getcwd()
z = os.path.split(cwd)

with open("index.md" , "w") as wf:
    print(f" # {z[1]}", file = wf )
    print("## INDEX\n" , file=wf)
    
    for t in x:
        print("[",t.strip().upper(),"](",t,")", sep="", file=wf)
    print("="*50, file=wf)