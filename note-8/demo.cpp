/// Ejercicio uno
#include <iostream>
using namespace std;

int main(){
  int op;
  double sol, usd, euro;
  
  while(op!=5){
    cout<<"1. Soles a dolares"<<endl;

  cout<<"2. Dolares a soles"<<endl;
  cout<<"3. Soles a euros"<<endl;
  cout<<"4. Euros a soles"<<endl;
  cout<<"5. Salir"<<endl;

  cout<<"Ingresa opcion: ";
  cin>>op;
    switch(op){
    case 1:
    	cout<<"Ingresa soles: ";
      cin>>sol;
      usd = sol*0.28;
      cout<<"Cantidad en dolares: "<<usd<<endl;
    	break;
    case 2:
    	cout<<"Ingresa dolares: ";
      cin>>usd;
      sol = usd*3.60;
      cout<<"Cantidad en soles: "<<sol<<endl;
    	break;
    case 3:
    	cout<<"Ingresa soles: ";
      cin>>sol;
      euro = sol*0.23;
      cout<<"Cantidad en euros: "<<euro<<endl;
    	break;
    case 4:
    	cout<<"Ingresa euros: ";
      cin>>euro;
      sol = euro*4.27;
      cout<<"Cantidad en soles: "<<sol<<endl;
    	break;
    default: break;
  	}
  }
  return 0;
}

// Ejercicio dos

/// Ejercicio uno
#include <iostream>
using namespace std;

int main(){
  char op;
  double area, base, altura, radio, lado;
  
  while(op!='s'){
    cout<<"a. Area del triangulo"<<endl;
  	cout<<"b. Area del cuadrado"<<endl;
  	cout<<"c. Area del circulo"<<endl;
  	cout<<"d. Area del rectangulo"<<endl;
  	cout<<"s. Salir"<<endl;

  	cout<<"Ingresa opcion: ";
  	cin>>op;
    switch(op){
    case 'a':
    	cout<<"Ingresa base: ";
      cin>>base;
    	cout<<"Ingresa altura: ";
      cin>>altura;
      area = (base*altura)/2;
      cout<<"Area del triangulo: "<<area<<endl;
    	break;
    case 'b':
    	cout<<"Ingresa lado: ";
      cin>>lado;
      area = lado*lado;
      cout<<"Area del cuadrado "<<area<<endl;
    	break;
    	break;
    case 'c':
    	cout<<"Ingresa radio: ";
      cin>>radio;
      area = 3.141516*(radio*radio);
      cout<<"Area del circulo: "<<area<<endl;
    	break;
    case 'd':
    	cout<<"Ingresa base: ";
      cin>>base;
    	cout<<"Ingresa altura: ";
      cin>>altura;
      area = base*altura;
      cout<<"Area de rectagulo: "<<area<<endl;
    	break;
    default: break;
  	}
  }
  return 0;
}
