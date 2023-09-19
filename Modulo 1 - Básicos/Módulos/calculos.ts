// 15/09/23

/** Arquivo de export */


/** Abordagem moderna: Módulos */
export function soma(a:number, b:number): number{
    return a + b;
}


/** Abordagem antiga: namespace */
namespace Calculos{
    export function subtrair(a:number, b:number): number{
        return a - b;
    }
}