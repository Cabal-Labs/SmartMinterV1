export default function getInputR(cName, cSymbol,cRoyalties) {
    const Input = {
        language: 'Solidity',
        sources: {
          'test.sol': {
            content: `
            // SPDX-License-Identifier: MIT
            pragma solidity ^0.8.7;
    
            import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
            import "@openzeppelin/contracts/token/common/ERC2981.sol";
            import "@openzeppelin/contracts/access/Ownable.sol";
            import "@openzeppelin/contracts/utils/Counters.sol";
    
            contract CabalContract is ERC721URIStorage, ERC2981, Ownable {
                using Counters for Counters.Counter;
    
                Counters.Counter private _tokenIdCounter;
    
                constructor() ERC721("${cName}", "${cSymbol}") {
                  _setDefaultRoyalty(msg.sender, ${cRoyalties});
                }

                function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC2981) returns (bool) {
                  return super.supportsInterface(interfaceId);
                }
    
                function safeMint(string[] memory uri) public onlyOwner {
    
                    for(uint256 i=0; i< uri.length; i++){
                        uint256 tokenId = _tokenIdCounter.current();
                        _tokenIdCounter.increment();
                        _safeMint(msg.sender, tokenId);
                        _setTokenURI(tokenId, uri[i]);
                    }   
    
                }
                function getCounter() public view returns(uint256) {
                    return _tokenIdCounter.current();
                }
                // The following functions are overrides required by Solidity.
                function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
                    super._burn(tokenId);
                }
                function tokenURI(uint256 tokenId)
                    public
                    view
                    override(ERC721, ERC721URIStorage)
                    returns (string memory)
                {
                    return super.tokenURI(tokenId);
                }
            }
          `}
        },
        settings: {
          outputSelection: {
            '*': {
              '*': ['*']
            }
          }
        }
      };

    return Input;
}

