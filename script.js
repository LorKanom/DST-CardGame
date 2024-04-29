class Card {
  constructor(name, description, raridade, classe, custo, tipo) {
    this.name = name;
    this.description = description;
    this.raridade = raridade;
    this.classe = classe;
    this.custo = custo;
    this.tipo = tipo;
    }
  }
class Player {
constructor(name, health, reliquia) {
  this._name = name;
  this._health = health;
  this._reliquia = [];
  this._reliquia.push(reliquia)
  this._hand = [];
  this._deck = [];
  this._descarte = [];
  this._efeito = [];
  this._consumiveis =[];
  this._consumiveis.length = 3;
  this._capacete = none;
  this._armadura = none;
  this._amuleto = none;
  }
  DrawCard(){
    const card = this._deck.pop();
    if (card) {
      this._hand.push(card);
    }
    else{
      //embaralhar a pilha de descarte no baralho
    }
  }
  PlayCard(cardIndex, target) {
    
  }
}
class Enemy{
  constructor(name, health){
    this._name = name;
    this._health = health;
    this._efeito = [];
  }
}