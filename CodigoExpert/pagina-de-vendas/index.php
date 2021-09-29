<?php
	date_default_timezone_set('America/Sao_Paulo');
	//$pdo = new PDO('mysql:host=mysql669.umbler.com:41890;dbname=dankicode','dankicode','hamilton');


	if(isset($_POST['acao'])){
		$email = $_POST['email'];
		$momento_registro = date('Y-m-d H:i:s');

		$sql = $pdo->prepare("INSERT INTO `email` VALUES (null,?,?)");

		$sql->execute(array($email,$momento_registro));
	}


?>
<!DOCTYPE html>
<html>
	<head>
		<title>Mini Curso Front-End</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0" />
		<meta name="description" content="Descrição do meu site." />
		<meta name="keywords" content="palavras,separadas,por,virgula" />
		<meta name="author" content="Hamilton">
		<link rel="stylesheet" href="css/style.css" />
		<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
	</head>

<body>

<header class="headerdapagina">

	<section class="section-video">

		<div class="primeiro-titulo">
			<h1 id="h1">Aprenda a PROGRAMAR DE <span style="color: orange;">GRAÇA</span> SEM <span style="color: orange;">SAIR DE CASA</span>:</h1>
			<h2 id="h2">O Treinamento Que Vai Mudar a Sua Vida!</h2>
		</div>

		<div class="classepadrao">


			<div class="video-de-venda">


				<iframe src="https://www.youtube.com/embed/_OmhoKvjD9U"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


				<?php

					$acao = filter_input(INPUT_POST,"acao");

					if($acao === NULL){

				?>
				<form method="post" class="formulario-do-video">
					<fieldset>
						<h2>Quer Ter a Oportunidade de <span>Aprender a Programar de Graça</span>?</h2>
						<input type="email" required placeholder="Insira o seu melhor Email" name="email" />
						<div class="botaoenviar">
							<input type="submit" value="ENVIAR" name="acao" />
						</div>
						
					</fieldset>
				</form><!--formulario-do-video-->

				<?php } else{ ?>

				<div class="email-enviado" style="display: inline-block; padding: 20px 40px; background-color: white; margin: 10px 0 30px 0; border-radius:15px;">

					<h2>Seus dados foram <span style="background-color: orange;">enviados</span> :-D</h2>
				</div>

				<?php } ?>
				

			 <!-- 	<div class="icone-logo">


					<div class="parte-de-cima"></div>

					<div class="parte-de-baixo"></div>
					


				</div> --><!--icone logo -->
				
			</div><!--video-de-venda-->

		</div><!--classepadrao-->
	</section><!--section-video-->



	

	<section class="section-chamada">
		<div class="classepadrao">
			<h2>Veja Algumas das Linguagens de Programação <span>Mais Usadas do Mundo</span>!</h2>
			<div class="btn-ver-artigo">
				<a href="#" target="_blank">
					<h2>Veja todo o Artigo!</h2>
				</a>
			</div>
		</div><!--classepadrao-->
	</section><!--section-chamada-->

</header>


<main>
	<section class="section-sobre-mim">
		<div class="classepadrao">
			<div>
				<h2>Um Pouco Sobre o Autor</h2>
			</div>

			<div class="sobre-mim-left">
				<p>Eu, Hamilton, também sou o criador do E-Book 6 Passos Para Aprender a Programar! Eu, Pela Permissão de Deus, Aprendi, e Estou Sempre Aprendendo a Programar. E Irei Te Ensinar Um Pouco do Que Eu Sei.</p>
			</div>


			<div class="sobre-mim-foto">
				minha foto background
			</div>

			<div class="sobre-mim-right">
				<h4>José Hamilton Santos Júnior</h4>
									
				<p>Olá, futuro desenvolvedor, eu me chamo José Hamilton!
				Foi eu que, pela misericórdia de Deus, criei este Treinamento para te Auxiliar no seu Desenvolvimento.</p>
			</div>
		</div><!-- classepadrao -->
	</section><!--sobre mim--->




	<section class="section-vantagens">
		<div class="classepadrao">
			<div class="titulo-das-vantagens">
				<h2>Vantagens do Treinamento</h2>
				<p>Observe as inúneras vantagens que esse Treinamento oferece para você.</p>
			</div>



			<div class="incapsular-right">
				<p>Sem enrolação</p>
				<p>Melhore o seu nível de experiência.</p>
				<p>Ensino o que eu sei sobre Digitação</p>
				<p>Código limpo</p>
			</div><!--incapsular right-->


			<div class="incapsular-left">
				<p>A quantidade de Sites no mundo só cresce, ou seja, é uma profissão que nunca sairá do mercado</p>

				<p>Já que você pode trabalhar como autônomo terá flexibilidade no seu futuro horário de trabalho</p>

				<p>Este Treinamento sempre será atualizado e você NÃO será cobrado por isso</p>

				<p>¹Não se turbe o vosso coração; credes em Deus, crede também em mim.  João 14:1</p>

				<p>²Na casa de meu Pai há muitas moradas; se não fose assim, eu vo-lo teria dito, pois vou prepara-vos lugar. João 14:2</p>
			</div><!--incapsular left-->
	
		</div><!--classepadrao-->

		<div class="classepadrao do-h2">
			<h2>Quais Dessas Vantagens Você Mais Gostou?</h2>
			<div class="btn-">
				<h1> ADICIONAR UM BOTÃO PARA VENDER O CURSO</h1>
			</div>
		</div><!--classepadrao do-h2-->

	</section><!--section vatangens-->


	<section class="section-sobre-treinamento classepadrao">
		<div>
			<h2>Sobre o Mini Curso de Font-End</h2>
		</div>

		<div class="encapsular-section">
			<div>
				<h2>Para Aprender a Programar Você Precisa Apenas das Ferramentas Corretas Para te Ajudar na sua Produtividade, e Claro, o Que eu Tenho a Te Oferecer, Este Treinamento!</h2>
			</div>

			<div class="imagem-do-curso">
				colocar background-image aqui
			</div>

			<div>
				<h2><b>José Hamilton</b></h2>
				<h2>Foi no Ano de 2020 Que Decidi Criar Este Treinamento. Nele eu te ensinarei desde o Básico até você desenvolver os seus próprios projetos em nome de Jesus.</h2>
			</div>
		</div><!--encapsular-sessão-->
	</section><!--section-sobre-treinamento classepadrao-->

	<section class="section-explicacao-final classepadrao">
		<div>
			<h2>Com Este treinamento você vai:</h2>
		</div>

		<div>
			<div>colocar a foto de um e-book aqui</div>
		</div>
		
		<div class="explicacao-left">
			<div>
				<p>Vai aprender a ter um código organizado, onde você não terá dificuldade se futuramente tiver que retornar a reutilizar o seu código</p>
			</div>

			<div>
				<p>As melhores ferramentas que iram te auxiliar na sua carreira como Desenvolvedor Web</p>
			</div>
		</div><!--explicaca left-->

		<div class="explicacao-right">
			<div>
				<p>Vai aprender o <b>BÁSICO</b> sobre programar em HTML e CSS, para futuramente <b>criar os seus proprios projetos</b></p>
			</div>
			<div>
				<p> Medite nessa palavra: Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai senão por mim... João 14:6</p>
			</div>
		</div><!--explicaca right-->
		
	</section><!--section explicacao final-->

	<section class="section-pagamento classepadrao">
		<div class="">
			<h2>Acesso Imediato Por Apenas <b>6 pagamentos de</b> <span style="color: green;">R$ 6,65</span></h2>
		</div>
		<div class="btn-">
			<h1> ADICIONAR UM BOTÃO PARA VENDER O CURSO</h1>
		</div>

		<div class="formas-de-pagamentos-desktop">
			colocor imagens de formas de pagamentos aqui
		</div>

		<div class="formas-de-pagamentos-mobile">
			colocor imagens de formas de pagamentos aqui
		</div>
	</section><!--sectionpagamento classepadrao-->

	<section class="section-garantia">
		<div class="classepadrao">
			<h2>Ainda não tem certeza? Não se preocupe.</h2>
			<h2>VOCÊ TEM 7 DIAS DE GARANTIA INCONDICIONAL!</h2>
			<h4>Sua setisgação garantida ou o seu dinheiro de volta</h4>

			<div class="dias-de-garantia"></div>


		</div><!--classepadrao-->
	</section><!--section-garantia-->













	<section class="section-artigo">
		<article>
			<h2></h2>

			<p></p>
		</article>

		<div class="e-book-fullstack">
			<form>
				<h2>E-book 100% Grátis Para Você!</h2>
				<div class="e-book">
					
				</div>
			
				<input type="email" name="email" required placeholder="Insira o seu melhor Email">
			</form>
		</div><!--e-book-fullstack-->
	</section><!--section-artigo-->
</main>

<footer>
	rodapé oficial
</footer>
</body>
</html>