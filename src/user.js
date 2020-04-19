class User {
    prenom;
    nom;
    tauxRandom = 1;
    constructor(prenom, nom, tauxRandom){
        this.prenom = prenom;
        this.nom = nom;
        if(tauxRandom != null){
            this.tauxRandom = tauxRandom;
        }
    }

    get prenom(){
        return this.prenom;
    }

    get nom(){
        return this.nom;
    }

    get tauxRandom(){
        return this.tauxRandom;
    }
};

export default User;