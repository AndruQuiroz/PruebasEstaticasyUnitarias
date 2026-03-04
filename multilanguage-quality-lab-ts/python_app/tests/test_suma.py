from utils import suma


def test_suma_numeros_positivos():
    assert suma(2, 3) == 5

def test_suma_con_cero():
    assert suma(0, 5) == 5

def test_suma_con_negativos():
    assert suma(-2, 3) == 1
