# style-transfer
A web app used for combining a content image with a style image

# Why the use of Gram Matrices in Style Transfer
- The original algorithm for neural style transfer used a cost function that minimized the sum of the *content loss* and the *style loss*
	- Here, the content loss represented the difference in *content* between the content image and our generated image
	- Here, the style loss represented the difference in *style* between the style image and our generated image
- The style loss function uses the gram matrix
	- Specifically, the style loss represents the normalized, squared difference between the gram matrix of the style image and the gram matrix of the generated image
- The gram matrix function cares about some aspects between two images, but it doesn't care about the specific presence or location of features within an image

# References
- [Tutorial of Neural Style Transfer using PyTorch](https://pytorch.org/tutorials/advanced/neural_style_tutorial.html)
- [Another Tutorial of Neural Style Transfer](https://nextjournal.com/gkoehler/pytorch-neural-style-transfer)
- [Using Gram Matrices in Style Transfer](https://www.quora.com/In-a-neural-style-transfer-why-does-using-Gram-matrices-keep-the-style)
- [Original Paper for Neural Style Transfer](https://arxiv.org/abs/1508.06576)
- [Paper about Demystifying Neural Style Transfer](https://arxiv.org/abs/1701.01036)
