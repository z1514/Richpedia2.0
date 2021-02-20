import os
import json

with open('les-miserables.json','r',encoding='utf-8') as f:
  datas = json.load(f)
  ma_x = -2000
  ma_y = -2000
  mi_x = 2000
  mi_y = 2000
  ma_r = -2000
  mi_r = 2000
  ma_cat = -1
  for node in datas['nodes']:
    ma_y = max(ma_y,node['y'])
    ma_x = max(ma_x,node['x'])
    mi_y = min(mi_y,node['y'])
    mi_x = min(mi_x,node['x'])
    ma_r = max(ma_r, node['symbolSize'])
    mi_r = min(mi_r, node['symbolSize'])
    ma_cat = max(ma_cat,node['category'])
  print(ma_x,ma_y,mi_x,mi_y,ma_r,mi_r)


  for k in datas:
    print(k)
  for l in datas['links']:
    print(l)
  for c in datas['categories']:
    print(c)
