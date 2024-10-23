//importacion de la base de datos
const {pool} = require('../bd/mysql.js');
//clase de importacion
class Cliente{
    constructor(){
        this.table = 'clientes';
    }
    async getAll(){
        try {
            const [rows] = await pool.query(`Select * from ${this.table}`);
            return{
                success:true,
                data:rows,
            }
        } catch (error) {
            return{
                success:false,
                message:'Error al obtener los anexos',
                error,
            }
        }
    }
}