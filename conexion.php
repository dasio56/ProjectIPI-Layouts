<?php
class Conexion {
   
    private $server="localhost";
    private $usr="postgres";
    private $pass="Chris210591";
    private $db="layout";
    
    
    public function __construct() 
    {
    
    }
    
    public function objConexion()
    {
        $cs="host=$this->server port=5432 dbname=$this->db user=$this->usr password=$this->pass";
        $con=  pg_connect($cs) or die("Error: Acceso denegado al sitio");   
        return $con;        
    }
    
    public function cud($query)
    {
        
        if ($consulta = pg_query($this->objConexion(), $query) == TRUE)
        {
            return true;
        }  
        else 
        {
            return pg_errormessage($this->objConexion());
        }   
    }
    
    public function extraer($query)
    {
        $respuesta=  pg_query($this->objConexion(),$query);
        return $respuesta;
    }
}
?>