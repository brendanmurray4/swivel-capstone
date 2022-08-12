import pyodbc
from flask import g
def get_db():
    """Opens a new database connection if there is none yet for the
    current application context.
    """
    if not hasattr(g, 'azure_db'):
        g.azure_db = connect_db()
        g.azure_db.autocommit = True
        g.azure_db.set_attr(pyodbc.SQL_ATTR_TXN_ISOLATION, pyodbc.SQL_TXN_SERIALIZABLE)
    return g.azure_db

def connect_db():
    ODBC_STR = "Driver={ODBC Driver 18 for SQL Server};Server=tcp:SERVERURL,1433;Database=DBNAME;Uid=USERNAME;Pwd={PASSWORD};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;"
    return pyodbc.connect(ODBC_STR)