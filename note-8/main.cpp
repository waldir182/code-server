/// Ejercicio dos
#include <iostream>
#include <cmath>
using namespace std;

int main(){
  int op;
  double n1, n2, result;
  
  while(op!=7){
    cout<<"1. Suma"<<endl;
  	cout<<"2. Resta"<<endl;
  	cout<<"3. Multiplicacion"<<endl;
  	cout<<"4. Divisiln"<<endl;
  	cout<<"5. Cuadrado"<<endl;
  	cout<<"6. Cubo"<<endl;
  	cout<<"7. Salir"<<endl;

  	cout<<"Ingresa opcion: ";
  	cin>>op;
    switch(op){
    case 1:
    	cout<<"Ingresa numero 1: ";
      cin>>n1;
    	cout<<"Ingresa numero 2: ";
      cin>>n2;
      result = n1+n2;
      cout<<"La suma es: "<<result<<endl;
    	break;
    case 2:
    	cout<<"Ingresa numero 1: ";
      cin>>n1;
    	cout<<"Ingresa numero 2: ";
      cin>>n2;
      result = n1-n2;
      cout<<"La resta es: "<<result<<endl;
    	break;
    case 3:
    	cout<<"Ingresa numero 1: ";
      cin>>n1;
    	cout<<"Ingresa numero 2: ";
      cin>>n2;
      result = n1*n2;
      cout<<"La mutiplicacion es: "<<result<<endl;
    	break;
    case 4:
    	cout<<"Ingresa numero 1: ";
      cin>>n1;
    	cout<<"Ingresa numero 2: ";
      cin>>n2;
      result = n1/n2;
      cout<<"La division es: "<<result<<endl;
    	break;
    case 5:
    	cout<<"Ingresa numero: ";
      cin>>n1;
      result = pow(n1, 2);
      cout<<"El cuadrado es: "<<result<<endl;
    	break;
    case 6:
    	cout<<"Ingresa numero: ";
      cin>>n1;
      result = pow(n1, 3);
      cout<<"El cubo es: "<<result<<endl;
    	break;
    default:
    	cout<<"Opcion invalida"<<endl;
    	break;
  	}
  }
  return 0;
}
