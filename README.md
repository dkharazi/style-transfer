# style-transfer
The purpose of this project is to combine a content image with a style image. The images used for this project comes from various popular paintings and photgraphs taken from Wikipedia. Specifically, the content images include a photograph of a dancing ballerina, the famous *Girl with a Pearl Earring*, and *Mona Lisa*. At the moment, the style images include the paintings from world-renowned artists, such as Van Gogh and Picasso.

Currently, the neural style transfer model built for combining styles with content images isn't run in real-time. The model already has been run on these combination of images to avoid wait times for the user. However, the time it takes for the model to run is on average about 20 seconds. Thus, I plan on building a feature for allowing the user to provide and model his or her own content image (or style image possibly) in the future.

# What is Neural Style Transfer?
Before diving into any descriptions of neural style transfer, let's first define style transfer. The original style transfer approach generates a new, stylized content image <a href="https://www.codecogs.com/eqnedit.php?latex=x^{*}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?x^{*}" title="x^{*}" /></a> given a content image <a href="https://www.codecogs.com/eqnedit.php?latex=x^{c}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?x^{c}" title="x^{c}" /></a> and a style image <a href="https://www.codecogs.com/eqnedit.php?latex=x^{s}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?x^{s}" title="x^{s}" /></a>. The feature maps of <a href="https://www.codecogs.com/eqnedit.php?latex=x^{*}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?x^{*}" title="x^{*}" /></a>, <a href="https://www.codecogs.com/eqnedit.php?latex=x^{c}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?x^{c}" title="x^{c}" /></a>, and <a href="https://www.codecogs.com/eqnedit.php?latex=x^{s}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?x^{s}" title="x^{s}" /></a> in the layer *l* of
a CNN are denoted by **F**, **P**, and **S**, respectively. To help illustrate these variable, **N** is the number of the feature maps in the layer l.

Neural style transfer iteratively generates <a href="https://www.codecogs.com/eqnedit.php?latex=x^{*}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?x^{*}" title="x^{*}" /></a> by optimizing a content loss and a style loss.


# Why Style Transfer uses Gram Matrices?
In [this paper](https://arxiv.org/abs/1701.01036), it has been shown that matching the Gram matrices of feature maps
is equivalent to minimizing the [Maximum Mean Discrepancy (MMD)](https://papers.nips.cc/paper/2016/file/5055cbf43fac3f7e2336b27310f0b9ef-Paper.pdf) with the second order polynomial
kernel. Thus, the paper argues that the essence of neural style transfer is to generate a new image from white noise by matching the neural activations with the content image and the Gram matrices with the style image.

The original algorithm for neural style transfer used a cost function that minimized the sum of the *content loss* and the *style loss*. Here, the content loss represented the difference in *content* between the content image and our generated image. And, the style loss represented the difference in *style* between the style image and our generated image.

The style loss function uses the gram matrix. Specifically, the style loss represents the normalized, squared difference between the gram matrix of the style image and the gram matrix of the generated image. The gram matrix function cares about some aspects between two images, but it doesn't care about the specific presence or location of features within an image.

# References
- [Tutorial of Neural Style Transfer using PyTorch](https://pytorch.org/tutorials/advanced/neural_style_tutorial.html)
- [Another Tutorial of Neural Style Transfer](https://nextjournal.com/gkoehler/pytorch-neural-style-transfer)
- [Using Gram Matrices in Style Transfer](https://www.quora.com/In-a-neural-style-transfer-why-does-using-Gram-matrices-keep-the-style)
- [Original Paper for Neural Style Transfer](https://arxiv.org/abs/1508.06576)
- [Paper about Demystifying Neural Style Transfer](https://arxiv.org/abs/1701.01036)
