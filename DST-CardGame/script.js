class CardAtack {
  constructor(name, description, raridade, classe, custo, efeito,D_efeito, damage) {
    this.name = name;
    this.description = description;
    this.raridade = raridade;
    this.classe = classe;
    this.custo = custo;
    this.efeito = efeito;
    this.D_efeito = D_efeito;
    this.damage = damage;
    }
  play(target){
    enemy.receivedDamage(this.damage)
    if(this.efeito === "Fraqueza"){
      enemy.applyFraqueza();
    }
    if(this.efeito == "veneno"){
      enemy._Veneno += this.D_efeito ;
    }
    if(this.efeito == "queimar"){
      enemy.applyQueimar();
    }
  }
  }
class CardDefense{
  constructor(name, description, raridade, classe, custo, efeito, defesa){
    this.name = name;
    this.description = description;
    this.raridade = raridade;
    this.classe = classe;
    this.custo = custo;
    this.efeito = efeito;
    this.defesa = defesa;
  }
  play(){
    Player._escudo += this.defesa
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
  this._escudo = 0
  }
  AddCard(carta){
    this._deck.push(carta);
  }
  embaralharBaralho() {
    for (let i = this._deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this._deck[i], this._deck[j]] = [this._deck[j], this._deck[i]];
    }
  }
  DrawCard(){
    const card = this._deck.pop();
    if (card) {
      this._hand.push(card);
    }
    else{
      if (this._descarte.length > 0){
        this._deck.push(this._descarte);
        this._descarte = []
      }
    }
  }
  PlayCard(cardIndex, target) {
    if (cardIndex >= 0 && cardIndex < this._hand.length){
      const card = this._hand[cardIndex];
      card.play(target);
      if (cardIndex.efeito == "Exaurir"){
        this._exilio.push(card);
      } else{
        this._descarte.push(card);
      }
    }
  }
  Manutenção(){
    
  }
}
class Enemy{
  constructor(name, health){
    this._name = name;
    this._health = health;
    this._efeito = [];
    this._weaknessTurn = 0;
    this.enemmydied = false
    this._Veneno = 0
  }
  receiveDamage(damage){
    if(this._weaknessTurn > 0){
      damage = Math.round(damage*1.25);
    }
    this._health -= damage;
    if(this._health <=0){
      this.enemmydied = true
    }
  }
  applyFraqueza(){
    this._weaknessTurn += 1
  }
  Manutenção(){
    if(this._weaknessTurn > 0 ){
      this._weaknessTurn --;
    }
    if(this.Veneno > 0){
      health -= this.Veneno
      this.Veneno = this.Veneno / 2
    }
  }
}
/*
Exaurir
*/

//personagens
const Wilson = new Player(Wilson, 90, Barba)

//cartas
const Ataque = new CardAtack("Ataque", "Cause 5 de dano.", "comum", "nenhum", 1, "", 0, 5)
const Defesa = new CardDefense("Defesa","Receba 5 de armadura.", "comum", "nenhuma", 1, "", 5)
