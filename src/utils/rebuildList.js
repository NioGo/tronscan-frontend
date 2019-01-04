import {upperCase} from 'lodash'

export default (list, tokenId, amount) =>{
  let IDmap = {}
  let newList = list.map(item => item)

  const tokenmap = localStorage.getItem('tokensMap')
  IDmap = tokenmap?JSON.parse(tokenmap): {}

  
  if(newList){
    if(typeof tokenId === 'string'){
      newList.map(item => {

        const id = item[tokenId]
        
        if(id == '_' || upperCase(id) == "TRX"){
          setItem(item, 'TRX', id, 6, amount?item[amount] / Math.pow(10,6): 0)
        }
        if(IDmap[id]){
          const list = IDmap[id].split('_')
          setItem(item, list[0], list[1], list[2], amount? item[amount] / Math.pow(10,list[2]): 0)
        }
        if(!IDmap[id] && id != "_" && upperCase(id) != "TRX"){
          setItem(item, item[tokenId], 0, 0, item[amount])
        }

        return item
      })
    }else{
      newList.map(item => {
        tokenId.map((tid,index) => {
          const id = item[tid]
          
          if(id == '_' || upperCase(id) == "TRX"){
            setItem(item, 'TRX', id, 6, amount[index]?item[amount[index]] / Math.pow(10,6): 0,index)
          }
          if(IDmap[id]){
            const list = IDmap[id].split('_')
            setItem(item, list[0], list[1], list[2], amount[index]? item[amount[index]] / Math.pow(10,list[2]): 0,index)
          }
          if(!IDmap[id] && id != "_" && upperCase(id) != "TRX"){
            setItem(item, item[tid], 0, 0, item[amount[index]],index)
          }
        })

        return item
      })
    }
    return newList
    
    
  }else{
    console.log('token id is undefined!!')
  }
}

function setItem(item,name,id,pre,amount,index=''){
  index = index == 0? '': index
  item['map_token_name'+index] = name
  item['map_token_id'+index] = id
  item['map_token_precision'+index] = pre
  item['map_amount'+index] =amount
  return item
}