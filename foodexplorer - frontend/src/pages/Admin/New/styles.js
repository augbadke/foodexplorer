import styled from "styled-components"

export const Container = styled.div`

  min-width: 375px;
  height: 100vh;
  display: grid;
  grid-template-rows: auto auto 1fr auto;

  .hide {
    display: none;
  }

  .backBtnAlign {

    >button {
    margin-top: 1.09rem;
    margin-left: 3.2rem;
    margin-bottom: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    width: max-content;
    border: none;
    background: none;

      >svg {
        font-size: 2.2rem;
      }
    } 
  }

  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
      
    .backBtnAlign {
      margin: 4rem auto 0;
      width: clamp(90rem,100vw - 5rem,112rem);

      >button {
        margin-left: -1rem;
        font-size: 2.4rem;
        font-weight: 700;

        >svg {
          font-size: 3.3rem;
        }
      } 
    }  
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 3.2rem;

  .formBtnAlign {
    display: flex;
    gap: 9%;
    margin-top: 2.8rem;
    margin-bottom: 5.3rem;
    
    >button {
      width: 50%;
      background: ${({ theme }) => theme.COLORS.TOMATO_400};
      white-space: nowrap;
    }

    .wide {
      width: 100%;
    }

    .deleteDish {
      background:  ${({ theme }) => theme.COLORS.DARK_800};
      width: 41%;
    }
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 0.8rem;
  }

  #image{
    display:none;
  }

  .image-wrapper {
    position: relative;

    >.preview {
        position: absolute;
        bottom: 9rem;
        background: ${({ theme }) => theme.COLORS.DARK_900};
        
        opacity: 90%;

        >svg {
          position: absolute;
          right: 1rem;
          top: 1rem;
          font-size: 2.5rem;

          cursor: pointer;
        }

        >img{
          width:22.9rem;
        }
      }
  }

  .preview-btn {
    position: absolute;
    top: 3.2rem;
    right: 7rem;
    font-size: 1.9rem;

    cursor: pointer;
  }

  .style-input {
    width: 100%;
    padding: 0.8rem 2.8rem;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    margin-bottom: 0;
    margin-top: 0;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    cursor: pointer;

    >svg {
      font-size: 3.2rem;
    }
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
  }

  label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-bottom: 1.6rem;
    margin-top: 2.4rem;
  }

  select {
    appearance: none;

    width: 100%;
    padding: 1.45rem 1.1rem;
    background: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 0.5rem;
    border: none;

    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .select {
    position: relative;
  }

  .select::after {
    content: "";
    top: 1.2rem;
    right: 1.2rem;
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;

    background-image: url("/src/assets/vector.svg");
    background-repeat: no-repeat;
    background-position: center;
    pointer-events: none;
  }

  .tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 0.8rem;
    padding: 0.7rem 1rem;
    gap: 1.6rem;
  }

  textarea {
    height: 17.2rem;
    padding: 1.4rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};

    border: none;
    border-radius: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    resize: none
  }

  @media (min-width: ${({ theme }) => theme.MEDIA.SIZE}) {
    width: clamp(90rem,100vw - 5rem,112rem);
    margin: 0 auto;
    padding: 0;

    h1 {
      width: 100%;
    }

    .align {
      display: flex;
      gap: 3.2rem;
    }

    .formBtnAlign {
      gap: 3.2rem;
      justify-content: right;
      margin-bottom: 5.3rem;

      >button {
          width: 17.2rem;
      }

      .wide {
          width: 17.2rem;
      }

      .deleteDish {
          width: 13.5rem;
      }
    }

    label {
      margin-top: 3.2rem;
    }

    .image-wrapper {
      width: 22.9rem;
      grid-area: A;
      white-space: nowrap;
    }

    .name {
      width:46.3rem;
    }

    select {
      background: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 0.8rem;
    }

    .select-wrapper {
      width: 32.5%;
    }

    .tags-wrapper {
      width: 83.7rem;
    }

    .price {
      width: 22.4%;
    }
}
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  padding: 0.8rem 1.6rem;


  background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.GRAY_300 : theme.COLORS.LIGHT_100};

  border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  border-radius: 10px;

  >button {
    display: flex;
    align-items: center;
    border: none;
    background: none;
    margin-left: 0.4rem;
    color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
  }

  >input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`