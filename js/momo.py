import turtle

def desenhar_coracao():
    turtle.fillcolor('red')
    turtle.begin_fill()
    turtle.left(140)
    turtle.forward(224)
    turtle.circle(-112, 200)
    turtle.left(120)
    turtle.circle(-112, 200)
    turtle.forward(224)
    turtle.end_fill()

def escrever_texto():
    turtle.penup()
    turtle.goto(0, -40)  # Ajusta a posição do texto
    turtle.color('white')
    turtle.write("EU TE AMO XUXU", align="center", font=("Arial", 20, "bold"))

turtle.speed(1)
turtle.bgcolor("black")
desenhar_coracao()
escrever_texto()


turtle.done()
